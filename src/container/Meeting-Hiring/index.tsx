"use client";

import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { MeetingHiring as data } from "@/lib/constData";
export default function MyApp() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#ffffff" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  // const ls = process.env.CAL;
  // console.log(calLink, "::::::::::;");

  return (
    <div className=" py-4 md:py-10 hiring-section">
      {/* <div className="hidden max-sm:block ">
        <button
          data-cal-namespace="15min"
          data-cal-link="jeet-shah-o0xybp/15min"
          data-cal-config='{"layout":"month_view"}'
        >
          Click me
        </button>
      </div> */}

      <h3 className="flex justify-center text-heading2 pb-4 md:pb-10">
        {data.title}
      </h3>
      <div className="flex justify-center">
        <Cal
          namespace="15min"
          calLink={calLink!}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  );
}
