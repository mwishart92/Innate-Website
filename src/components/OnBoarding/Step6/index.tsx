import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import Swal from "sweetalert2";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import user from "@/public/images/onboarding/users-01.png";

interface Step6Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { address: string }) => void;
}

const Step6: React.FC<Step6Props> = ({ onNext, onPrevious, onChange }) => {
  const autoCompleteRef = useRef<HTMLInputElement | null>(null);
  const autoComplete = useRef<google.maps.places.Autocomplete | null>(null);
  const [address, setAddress] = useState<string>("");
  const [addressSelected, setAddressSelected] = useState<boolean>(false);

  useEffect(() => {
    const savedData = sessionStorage.getItem("step6");
    if (savedData) {
      setAddress(savedData);
      setAddressSelected(true); // Keep message visible if data exists
    }

    const loadScript = (url: string, callback: () => void) => {
      if (document.querySelector(`script[src="${url}"]`)) {
        if (window.google) callback();
        return;
      }

      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.google) callback();
      };
      document.head.appendChild(script);
    };

    const handleScriptLoad = () => {
      if (!autoCompleteRef.current || !window.google?.maps) return;

      autoComplete.current = new window.google.maps.places.Autocomplete(autoCompleteRef.current);

      autoComplete.current.addListener("place_changed", () => {
        const place = autoComplete.current?.getPlace();
        if (place?.formatted_address) {
          setAddress(place.formatted_address);
          setAddressSelected(true); // Mark as selected from dropdown
          onChange({ address: place.formatted_address });
          sessionStorage.setItem("step6", place.formatted_address);
        }
      });
    };

    if (!window.google) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0A5Ma5HEzqdRzsRoh6TzvpwWPZ0UqP6s&libraries=places",
        handleScriptLoad
      );
    } else {
      handleScriptLoad();
    }
  }, [onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setAddressSelected(false); // Reset selection status when user types
  };

  const handleNextClick = () => {
    if (!address.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your address before proceeding.",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    sessionStorage.setItem("step6", address);
    onNext();
  };

  return (
    <div className="gradient flex items-center justify-center px-5 min-h-[690px] mob:min-h-0">
      <div className="max-w-[90%] mob:max-w-full w-full py-20 mob:pt-10">
        <div>
          <Text as="h1" className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-3">
            Enter your address to get a starting cost
          </Text>
          <Text className="text-[16px] font-normal mob:text-[14px]">
            Construction costs are highly dependent on your location. Share your address so we can give you a tailored estimate.
          </Text>
          <input
            ref={autoCompleteRef}
            placeholder="Address"
            type="text"
            value={address}
            onChange={handleInputChange}
            className="pl-4 mt-7 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
          <div className="flex gap-[12px] mt-5">
            <Image src={user} alt="" className="w-[24px] h-[24px]" />

            {addressSelected && (
              <>
                <Text className="text-[16px] font-normal mob:text-[14px]">
                  4 of your neighbors are currently working on projects with Innate.
                </Text>
              </>
            )}
          </div>

        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image className="rotate-180" src={arrow} alt="" width={24} height={24} />
              Previous
            </button>
            <button
              onClick={handleNextClick}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
