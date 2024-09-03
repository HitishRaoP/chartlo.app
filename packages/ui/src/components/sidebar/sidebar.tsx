'use client';
import { Card, CardContent } from '../card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';
import { UploadButton } from '../upload-button';
import { Tools } from '../tools';
import { CloudDownload, Settings, Plus, Grid2X2 } from 'lucide-react';
import { ColumnNames } from '../column-names';

const triggers = [
  {
    name: 'import',
    icon: <Plus className="w-[1.1rem] h-[1.1rem]" />,
  },
  {
    name: 'table',
    icon: <Grid2X2 className="w-[1.1rem] h-[1.1rem]" />,
  },
  {
    name: 'adjustments',
    icon: <Settings className="w-[1.1rem] h-[1.1rem]" />,
  },
  {
    name: 'export',
    icon: <CloudDownload className="w-[1.1rem] h-[1.1rem]" />,
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
