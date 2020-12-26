import React from 'react'
import styled, { css } from 'styled-components'

import { palette } from '@Shared/styles'

type TitleProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5
  fontWeight?: 300 | 400 | 500 | 700
  letterSpacing?: number
  style?: React.CSSProperties
  section?: boolean
  primary?: boolean
  secondary?: boolean
}

const FONT_SIZE: { [key: string]: string } = {
  h1: '3.8rem',
  h2: '2rem',
  h3: '2.2rem',
  h4: '1.8rem',
  h5: '1.7rem',
}

const fontSize = ({ level = 1 }: TitleProps) => FONT_SIZE[`h${level}`]

const styles = css`
  font-size: ${fontSize};
  font-weight: ${({ fontWeight = 500 }) => fontWeight};
  letter-spacing: ${({ letterSpacing = 1 }) => `${letterSpacing}px`};
  margin-bottom: 7px;

  ${({ section }) =>
    section &&
    css`
      letter-spacing: 2;
      width: 100%;
      border-bottom: ${palette.dashedLine()};
      padding-bottom: 10px;
      margin-bottom: 32px;
    `}

  ${({ primary, theme }) =>
    primary &&
    css`
      color: ${theme.primaryColor};
    `}
  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.secondaryColor};
    `}
`

const Title = styled(({ level = 1, children, ...props }: TitleProps) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`

export default Title
