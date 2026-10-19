"use client";

import { Suspense, use } from "react";

import { RequireAuth } from "@/components/providers/require-auth";
import { ChatView } from "@/components/chat/chat-view";

export default function ChatPage({
  params,
}: {
  params: Promise<{ repoId: string }>;
}) {
  return (
    <Suspense fallback={<div className="p-6">Loading chat...</div>}>
      <ChatPageContent params={params} />
    </Suspense>
  );
}

function ChatPageContent({ params }: { params: Promise<{ repoId: string }> }) {
  const { repoId } = use(params);

  return (
    <RequireAuth>
      <ChatView repoId={repoId} />
    </RequireAuth>
  );
}
