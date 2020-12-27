import axios, { AxiosResponse } from 'axios'
import { Project } from '@Shared/types/Project'
import { Career } from '@Shared/types/Career'
import { Article } from '@Shared/types/Article'
import { Education } from '@Shared/types/Education'
import { Etc } from '@Shared/types/Etc'
import { Profile } from '@Shared/types/Profile'
import { Skill } from '@Shared/types/Skill'
import { Meta, OGImage } from '@Shared/types/Meta'
import { System, SystemEnabled, SystemSort } from '@Shared/types/System'

export const API = axios.create({
  baseURL: 'http://localhost:1208/api',
})

export type ProfileGETResponse = AxiosResponse<Profile>
export const ProfileAPI = {
  base: '/profile',
  get() {
    return this.base
  },
  update(profile: Profile) {
    return API.post(this.base, profile)
  },
}

export type MetaGETResponse = AxiosResponse<Meta>
export const MetaAPI = {
  base: '/meta',
  get() {
    return this.base
  },
  update(meta: Meta) {
    return API.put(this.base, meta)
  },
  createOGImage(imageInfo: OGImage) {
    return API.post<{ filename: string }>('/meta/og/image', imageInfo)
  },
  updateHomage(homepage: string) {
    return API.put('/meta/homepage', { homepage })
  },
}

export type SystemGETResponse = AxiosResponse<System>
export const SystemAPI = {
  base: '/system',
  get() {
    return this.base
  },
  updateEnable(value: SystemEnabled) {
    return API.put(`${this.base}/enable`, value)
  },
  updateSort(value: SystemSort) {
    return API.put(`${this.base}/sort`, value)
  },
}

export type SkillGETResponse = AxiosResponse<{
  updatedAt: string
  data: Skill[]
}>
export const SkillAPI = {
  get() {
    return '/skills'
  },
  update(skill: Skill[]) {
    return API.post('/skills', skill)
  },
}

export type ProjectGETResponse = AxiosResponse<Project[]>
export const ProjectAPI = {
  base: '/projects',
  get() {
    return this.base
  },
  add(project: Project) {
    return API.post(this.base, project)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, project: Project) {
    return API.put(`${this.base}/${id}`, project)
  },
}

export type CareerGETResponse = AxiosResponse<Career[]>
export const CareerAPI = {
  base: '/careers',
  get() {
    return this.base
  },
  add(career: Career) {
    return API.post(this.base, career)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, career: Career) {
    return API.put(`${this.base}/${id}`, career)
  },
}

export type ArticleGETResponse = AxiosResponse<Article[]>
export const ArticleAPI = {
  base: '/articles',
  get() {
    return this.base
  },
  add(article: Article) {
    return API.post(this.base, article)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, article: Article) {
    return API.put(`${this.base}/${id}`, article)
  },
}

export type EducationGETResponse = AxiosResponse<Education[]>
export const EducationAPI = {
  base: '/educations',
  get() {
    return this.base
  },
  add(education: Education) {
    return API.post(this.base, education)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, education: Education) {
    return API.put(`${this.base}/${id}`, education)
  },
}

export type EtcGETResponse = AxiosResponse<Etc[]>
export const EtcAPI = {
  base: '/etcs',
  get() {
    return this.base
  },
  add(etc: Etc) {
    return API.post(this.base, etc)
  },
  delete(id: string) {
    return API.delete(`${this.base}/${id}`)
  },
  update(id: string, etc: Etc) {
    return API.put(`${this.base}/${id}`, etc)
  },
}
