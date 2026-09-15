import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className="pb-12">
        <PageHeader title={title} description={description} />
        <div className="mx-auto max-w-6xl overflow-x-clip px-0 sm:px-2">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
