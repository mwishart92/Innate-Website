import React from "react";
// import Image from "next/image";

import Text from "@/components/ui/Text";

// import rightarrow from "@/public/images/press/RightArrowbue.png";
import Form from "@/components/Contact/Form";

const ContactHome = () => {
  return (
    <div className="pb-36 pt-24 px-40 xl:px-24 mob:px-5" id="contactHome">
      <div className="mx-auto w-full max-w-full flex justify-bewteen lg:flex-wrap gap-[160px] lg:gap-[50px]">
        <div className="max-w-[40%] mob:max-w-[90%]">
          <Text
            as="h2"
            className="text-[34px] text-white font-semibold mob:text-[30px]"
          >
          Let's Talk About Your Project
          </Text>
          <Text className="text-[16px] mt-4 text-[#D9D9D9] mob:font-normal mob:text-[14px]">
            Schedule a complimentary 30-minute consultation to discuss your architecture or construction project and determine if we're the right fit. If we are, we'll book an in-person site visit; if not, we'll point you to a better resource.
          </Text>
        </div>
        {/* right form */}
        <Form />
      </div>
    </div>
  );
};

export default ContactHome;
