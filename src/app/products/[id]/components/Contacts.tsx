import IconifyWrapper from "@/app/components/IconifyWrapper";
import React from "react";

function Contacts() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 w-3/4">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
          {/* image - start */}
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5 flex items-center justify-center">
            <IconifyWrapper icon="mynaui:telephone-call" size="10rem" />
          </div>
          {/* image - end */}

          {/* content - start */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
              お問合せはこちら
            </h2>

            <p className="mb-8 max-w-md text-gray-600">
              最新の在庫状況など、
              <br />
              お気軽にお問い合わせください
            </p>

            <div className="flex flex-col gap-2">
              <a className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                TEL: xxx-xxx-xxxx
              </a>
              <a className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                FAX: xxx-xxx-xxxx
              </a>
            </div>
          </div>
          {/* content - end */}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
