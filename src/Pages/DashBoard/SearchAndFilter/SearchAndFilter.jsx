import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';


const SearchAndFilter = () => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
     
      
      // Filter `option.label` match the user type `input`
      const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div>
      <div className="md:flex justify-between w-full">
        <h3 className="text-4xl font-semibold">Dashboard</h3>
        <Button className='bg-[#001529] text-white'>ADD STUDENT</Button>
      </div>
      <div className='md:flex justify-between my-6'>

      <Space.Compact size="large" className='md:w-4/12'>
      <Input addonBefore={<SearchOutlined />} placeholder="large size" />
    </Space.Compact>
<div className='flex gap-5'>
<Button>Apply Filter</Button>
<Select
    showSearch
    placeholder="Sort by"
    optionFilterProp="children"
    onChange={onChange}
    filterOption={filterOption}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />

</div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
