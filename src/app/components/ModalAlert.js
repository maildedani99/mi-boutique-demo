"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { getMessageById } from "../lib/getMessage";

export default function ModalAlert() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const messageId = searchParams.get("messageId");
  const { message, type } = getMessageById(messageId);

  const textStyle = type === "success" ? "text-text" : "text-red-800";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-lg my-auto mx-4    max-w-xl w-full `}
      >
        <div className={`flex text-center p-6  font-semibold ${textStyle}`}>
          <p className="text-lg mx-auto">{message}</p>
        </div>
        <div className="flex p-4">
          <button
            onClick={() => router.back()}
            className="flex lg:w-2/6  mx-auto sm:w-3/6 w-4/6 bg-primary  py-2  text-white cursor-pointer "
          >
            <span className="mx-auto font-semibold ">Aceptar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
