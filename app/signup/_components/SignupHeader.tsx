import React from "react";

interface SignupHeaderProps {
  step: string;
  subTitle: string;
  description?: string;
}

function SignupHeader({ step, subTitle, description }: SignupHeaderProps) {
  return (
    <header className="flex flex-col justify-center">
      <div className="flex items-center justify-between p-4">
        <p className="text-3xl">{step}</p>
        <section className="text-right">
          <strong className="text-xl">회원가입</strong>
          <p className="text-xs text-gray-500">{subTitle}</p>
        </section>
      </div>
      {description && (
        <small className="pl-2 text-center text-xs text-gray-500">
          {description}
        </small>
      )}
    </header>
  );
}

export default SignupHeader;
