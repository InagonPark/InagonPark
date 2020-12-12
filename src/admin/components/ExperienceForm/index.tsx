import { useState } from 'react'
import { Form, Input, Select, Switch } from 'antd'
import { HomeOutlined, IdcardOutlined } from '@ant-design/icons'

import DatePickers, { Date, DateString } from '@Admin/components/DatePickers'
import WhatDidIDo from '@Admin/components/WhatDidIdDo'
import { skillTitles } from '@Shared/constants'
import { calcCareerYearAndMonth } from '@Shared/helpers'

function ExperienceForm() {
  const [resigned, setResigned] = useState(true)

  const [dateString, setDateString] = useState<DateString>('')
  const [career, setCareer] = useState<{ years: number; months: number }>()

  const handleCareerDateChange = (date: Date, str: DateString) => {
    setDateString(str)

    if (date) {
      setCareer(calcCareerYearAndMonth(date))
    }
  }

  const handleSkillChange = (values: string[]) => {
    console.log(values)
  }

  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }
  return (
    <div>
      <Form id="experience" onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item name="resigned" label="퇴사여부">
          <Switch
            onChange={(checked) => setResigned(!checked)}
            checkedChildren="재직중"
            unCheckedChildren="퇴사"
          />
        </Form.Item>
        <Form.Item
          label="업무 기간"
          name="period"
          rules={[{ required: true, message: '입사일 및 퇴사일을 입력해주세요.' }]}
        >
          <DatePickers
            startDateLabel="입사일"
            doneDateLabel="퇴사일"
            onChange={handleCareerDateChange}
            multiple={resigned}
          />
        </Form.Item>

        <Form.Item
          name="corp"
          label="회사명"
          rules={[{ required: true, message: '회사 이름을 입력해주세요.' }]}
        >
          <Input placeholder="회사명 (ex, 퀄슨 (Qualson))" prefix={<HomeOutlined />} />
        </Form.Item>

        <Form.Item
          name="position"
          label="직책"
          rules={[{ required: true, message: '회사에서의 직책을 입력해주세요.' }]}
        >
          <Input placeholder="직책 (ex, 개발팀 프론트엔드 개발자)" prefix={<IdcardOutlined />} />
        </Form.Item>
        <Form.Item
          name="skills"
          label="기술 스펙"
          rules={[{ required: true, message: '회사에서의 직책을 입력해주세요.' }]}
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="회사에서 배운 기술을 선택해주세요."
            onChange={handleSkillChange}
            options={skillTitles.map((title) => ({ value: title }))}
          />
        </Form.Item>

        <WhatDidIDo />
      </Form>
    </div>
  )
}

export default ExperienceForm
