import React from "react";

interface SignupHeaderProps {
  step: string;
  subTitle: string;
  description?: string;
}

function SignupHeader({ step, subTitle, description }: SignupHeaderProps) {
  return (
    <header className="mb-5 flex flex-col">
      <div className="flex justify-between p-4">
        <p className="text-3xl">{step}</p>
        <section className="text-right">
          <strong className="text-2xl">회원가입</strong>
          <p className="text-xsm text-gray-500">{subTitle}</p>
        </section>
      </div>
      {description && (
        <small className="pl-2 text-sm text-gray-500">{description}</small>
      )}
    </header>
  );
}

export default SignupHeader;
