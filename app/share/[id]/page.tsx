import { notFound } from "next/navigation";
import CodeViewer from "@/components/code-viewer";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: "An app generated on LlamaCoder.io",
    description: "App generated using AI",
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  if (typeof params.id !== "string") {
    notFound();
  }

  // Mock data since we removed database
  const generatedApp = {
    code: "// No code available",
    prompt: "Sample AI-generated app"
  };

  if (!generatedApp) {
    return <div>App not found</div>;
  }

  return <CodeViewer code={generatedApp.code} />;
}
