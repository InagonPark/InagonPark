import useSWR from 'swr'
import { Button, Card, Col, Divider, Modal, Row, Select, Tag } from 'antd'

import { API, MetaAPI, MetaGETResponse, SystemAPI, SystemGETResponse } from '@Admin/api'
import ColorBox from '@Admin/components/ColorBox'
import DeployForm from '@Admin/components/DeployForm'
import EditableText from '@Admin/components/Editable/EditableText'
import Loading from '@Admin/components/Loding'
import OpenGraphForm from '@Admin/components/OpenGraphForm'
import SectionEnableForm from '@Admin/components/SectionEnableForm'
import SectionSortForm from '@Admin/components/SectionSortForm'
import SettingField from '@Admin/components/SettingField'
import TagInput from '@Admin/components/TagInput'
import useDeploy from '@Admin/hooks/useDeploy'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import Space from '@Resume/components/atoms/Space'
import mainColors from '@Shared/theme/mainColors'
import { OGImage } from '@Shared/types/Meta'
import { SystemEnabled, SystemSort } from '@Shared/types/System'

const { Option } = Select

function SettingManagement() {
  const MetaSWR = useSWR<MetaGETResponse>(MetaAPI.get(), API, {
    loadingTimeout: 9000,
  })
  const SystemSWR = useSWR<SystemGETResponse>(SystemAPI.get(), API, {
    loadingTimeout: 9000,
  })

  const { visible, open, close } = useModal()
  const { deploy, loading, error, result } = useDeploy()

  if (!MetaSWR.data || !SystemSWR.data) {
    return <Loading />
  }

  const {
    data: { data: meta },
  } = MetaSWR

  const {
    data: { data: system },
  } = SystemSWR

  const onMetaSave = async (name: string, value: string | string[]) => {
    await MetaAPI.update({ ...meta, [name]: value })
    MetaSWR.mutate()
  }

  const createOpenGraphImage = async (values: OGImage) => {
    const {
      data: { filename },
    } = await MetaAPI.createOGImage(values)

    const { pathname } = new URL(meta.homepage)

    onMetaSave('image', `${pathname}/${filename}`)
  }

  const changeHomepageURL = async (name: string, value: string) => {
    await MetaAPI.updateHomage(value)
    onMetaSave(name, value)
  }

  const onEnableChange = async (value: SystemEnabled) => {
    await SystemAPI.updateEnable(value)
    SystemSWR.mutate()
  }

  const onSortChange = async (value: SystemSort) => {
    await SystemAPI.updateSort(value)
    SystemSWR.mutate()
  }

  const { title, description, keywords, primaryColor, homepage } = meta

  return (
    <AdminLayout
      title="설정"
      subtitle="웹 페이지를 표현할 데이터를 입력하세요. SEO 및 배포에 영향이 있을 수 있으니 정확하게 입력해주세요."
      actions={[
        <Button type="primary" onClick={open}>
          작성 가이드 보기
        </Button>,
      ]}
    >
      <Row gutter={12} style={{ height: '100%' }}>
        <Col span={12}>
          <Card title="메타 데이터 관리" style={{ marginBottom: 7, height: '100%' }}>
            <SettingField title="홈페이지">
              <EditableText
                name="homepage"
                type="text"
                placeholder="이력서 페이지의 주소를 입력해주세요. ex) github --> https://parkoon.github.com/resume"
                initialValue={homepage}
                onSave={changeHomepageURL}
              />
            </SettingField>

            <SettingField title="타이틀">
              <EditableText
                name="title"
                type="text"
                placeholder="이력서 페이지의 타이틀을 입력해주세요."
                initialValue={title}
                onSave={onMetaSave}
              />
            </SettingField>
            <SettingField title="설명">
              <EditableText
                name="description"
                type="text"
                placeholder="이력서 페이지의 설명을 입력해주세요."
                initialValue={description}
                onSave={onMetaSave}
              />
            </SettingField>

            <SettingField title="키워드">
              <TagInput
                initialValues={keywords}
                onChange={(values) => onMetaSave('keywords', values)}
              />
            </SettingField>

            <SettingField title="메인색상">
              <Select
                defaultValue={primaryColor}
                style={{ width: 130 }}
                onChange={(value) => onMetaSave('primaryColor', value)}
              >
                {mainColors.map((color) => (
                  <Option key={color.id} value={color.dark}>
                    <ColorBox color={color.dark} />
                  </Option>
                ))}
              </Select>
            </SettingField>

            <SettingField title="오픈 그래프 이미지 생성">
              <OpenGraphForm url="/og.png" onComplete={createOpenGraphImage} />
            </SettingField>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="시스템 관리" style={{ marginBottom: 7, height: '100%' }}>
            <SettingField title="깃허브 페이지로 배포하기">
              <DeployForm />
            </SettingField>
            <SettingField title="섹션 활성화">
              <SectionEnableForm initialValue={system.enabled} onChange={onEnableChange} />
            </SettingField>

            <SettingField title="섹션 순서 변경">
              <SectionSortForm initialValue={system.sort} onChange={onSortChange} />
            </SettingField>
            <SettingField title="파일 히스토리">Coming soon...</SettingField>
          </Card>
        </Col>
      </Row>

      <Modal
        title="메타 데이터 작성 가이드"
        visible={visible}
        onCancel={close}
        footer={
          <Button key="back" onClick={close}>
            닫기
          </Button>
        }
      ></Modal>
    </AdminLayout>
  )
}

export default SettingManagement
