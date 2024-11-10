import { useState } from "react";
import { Button } from "@/components/ui/button";

function Copyright() {
  const [iframeMinimized, setIframeMinimized] = useState(true);

  const handleToggleIframe = () => {
    setIframeMinimized(!iframeMinimized);
  };

  return (
    <>
      <div
        className={`bottom-9 right-0  shadow-md rounded-t-lg transition-all fixed duration-300 ease-in-out ${iframeMinimized ? 'h-14 w-1/2' : 'h-[430px] w-1/2'
          }`}
      >
        {iframeMinimized ? (
          <Button
            onClick={handleToggleIframe}
            className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            <span>Tap to Chat</span>
          </Button>
        ) : (
          <Button
            onClick={handleToggleIframe}
            className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </Button>
        )}
        {!iframeMinimized && (
          <div className="flex justify-end h-full">
            <iframe width="50%" height="100%" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/d9cafa05-3539-4bde-875e-e96f4babecbd"></iframe>
          </div>
        )}
      </div>

      {/* Rest of the survey content */}

      <div className="bg-black text-white text-xs dark:text-black dark:text-sm dark:bg-slate-400 text-center fixed z-50 bg-background bottom-0 left-0 right-0 py-2">
        © 2024 Delhi, (C,A,R) Inc All rights reserved
      </div>
    </>
  );
}

export default Copyright;
