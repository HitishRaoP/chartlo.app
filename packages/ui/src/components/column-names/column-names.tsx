'use client';
import { isNumeric } from '@chartloapp/lib';
import { RootState } from '@chartloapp/state';
import { Checkbox } from '../checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../input';
import { setChartConfig, setFields } from '@chartloapp/state/src/slices/chart';
import { Label } from '../label';
import { ScrollArea } from '../scroll-area';
import { IoText } from 'react-icons/io5';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const ColumnNames = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.chart.data);
  const fields = useSelector((state: RootState) => state.chart.fields);
  const chartConfig = useSelector(
    (state: RootState) => state.chart.chartConfig,
  );
  const url = useSelector((state: RootState) => state.chart.url);
  const numericFields: string[] = [];
  const nonNumericFields: string[] = [];

  if (data.length > 0) {
    Object.keys(data[0]).forEach((key) => {
      const isFieldNumeric = isNumeric(data[0][key]);
      if (isFieldNumeric) {
        numericFields.push(key);
      } else {
        nonNumericFields.push(key);
      }
    });
  }

  if (url) {
    return (
      <div className="h-full flex flex-col space-y-4">
        <ScrollArea className="h-full pt-2">
          {numericFields.map((key) => (
            <div
              key={key}
              className="flex items-center w-full justify-between p-2 hover:bg-gray-100 dark:hover:bg-neutral-800  rounded-md"
            >
              <div className="flex items-center w-full">
                <Checkbox
                  id={key}
                  checked={fields.includes(key)}
                  onCheckedChange={(isChecked) =>
                    dispatch(setFields({ key, isChecked }))
                  }
                />
                <Label htmlFor={key} className="ml-2 w-full">
                  {key}
                </Label>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-full">
                    <BsThreeDotsVertical />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {fields.includes(key) && (
                    <DropdownMenuItem>
                      <div className="flex items-center">
                        <span className="mr-2">Color:</span>
                        <Input
                          type="color"
                          value={chartConfig[key]?.color || '#000000'}
                          onChange={(e) =>
                            dispatch(
                              setChartConfig({
                                ...chartConfig,
                                [key]: {
                                  ...chartConfig[key],
                                  color: e.target.value,
                                },
                              }),
                            )
                          }
                        />
                      </div>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </ScrollArea>
        <ScrollArea className="h-full border-t pt-2">
          {nonNumericFields.map((key) => (
            <div
              key={key}
              className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md"
            >
              <div className="flex items-center">
                <IoText className="text-red-400 mr-2" />
                <Label htmlFor={key}>{key}</Label>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    );
  } else {
    return <div className="text-center pt-2">No Data</div>;
  }
};
