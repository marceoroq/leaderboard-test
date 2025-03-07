"use client";

import { Tab, TabList, TabPanel, TabPanels, TabProvider } from "@/components/Tab";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full max-w-3xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Tabs example</h1>

          <TabProvider defaultTab="tab1">
            <TabList>
              <Tab id="tab1">Pestaña 1</Tab>
              <Tab id="tab2">Pestaña 2</Tab>
            </TabList>

            <TabPanels>
              <TabPanel id="tab1">
                <div className="p-4 rounded border">
                  <h2 className="text-xl font-semibold mb-2">Contenido de la Pestaña 1</h2>
                  <p>Este es el contenido de la primera pestaña.</p>
                </div>
              </TabPanel>

              <TabPanel id="tab2">
                <div className="p-4 rounded border">
                  <h2 className="text-xl font-semibold mb-2">Contenido de la Pestaña 2</h2>
                  <p>Este es el contenido de la segunda pestaña.</p>
                </div>
              </TabPanel>
            </TabPanels>
          </TabProvider>
        </div>
      </main>
    </div>
  );
}
