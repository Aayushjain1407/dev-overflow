import { auth } from "@/auth";
import QuesitonForm from "@/components/forms/QuesitonForm";
import ROUTES from "@/constants/routes";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  const session = await auth();
  if (!session) return redirect(ROUTES.SIGN_IN);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask A Question</h1>

      <div className="mt-9">
        <QuesitonForm />
      </div>
    </>
  );
};

export default AskQuestion;
