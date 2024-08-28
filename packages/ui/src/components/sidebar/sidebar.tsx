'use client';
import { Card, CardContent } from '../card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';
import { FaTable } from 'react-icons/fa';
import { HiMiniAdjustmentsVertical } from 'react-icons/hi2';
import { CiExport } from 'react-icons/ci';
import { UploadButton } from '../upload-button';
import { CiImport } from 'react-icons/ci';
import { Tools } from '../tools';
import { ColumnNames } from '../column-names';

const triggers = [
  {
    name: 'import',
    icon: <CiImport className="w-4 h-4" />,
  },
  {
    name: 'table',
    icon: <FaTable className="w-4 h-4" />,
  },
  {
    name: 'adjustments',
    icon: <HiMiniAdjustmentsVertical className="w-4 h-4" />,
  },
  {
    name: 'export',
    icon: <CiExport className="w-4 h-4" />,
  },
];

export function Sidebar() {
  return (
    <Tabs defaultValue="import" className="w-60">
      <TabsList className="flex justify-between">
        {triggers.map((trigger) => (
          <TabsTrigger key={trigger.name} value={trigger.name}>
            {trigger.icon}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="import">
        <Card>
          <CardContent className="h-[calc(100vh-11rem)]">
            <UploadButton />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="table">
        <Card>
          <CardContent className="h-[calc(100vh-11rem)]">
            <ColumnNames />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="adjustments">
        <Card>
          <CardContent className="h-[calc(100vh-11rem)]">
            <Tools />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="export">
        <Card>
          <CardContent className="h-[calc(100vh-11rem)]"></CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
