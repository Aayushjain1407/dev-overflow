import { auth } from "@/auth";
import QuesitonForm from "@/components/forms/QuesitonForm";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";
import { notFound, redirect } from "next/navigation";
import React from "react";

const EditQuestion = async ({ params }: RouteParams) => {
  const { id } = await params;
  if (!id) return notFound();

  const session = await auth();
  if (!session) return redirect(ROUTES.SIGN_IN);

  const { data: question, success } = await getQuestion({ questionId: id });
  if (!success) return notFound;
  if (question?.author.toString() !== session?.user?.id)
    redirect(ROUTES.QUESTION(id));
  return (
    <>
      <div className="mt-9">
        <main>
        <QuesitonForm question={question} isEdit />
        </main>
      </div>
    </>
  );
};

export default EditQuestion;
