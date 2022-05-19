import { getCurrentInstance } from 'vue'
import IduxComponents from '@idux/components'
import IduxCdk from '@idux/cdk'
import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
} from '@idux/components';

addIconDefinitions(IDUX_ICON_DEPENDENCIES);

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents)
}

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#STYLE_HREF#'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadCss()
}
