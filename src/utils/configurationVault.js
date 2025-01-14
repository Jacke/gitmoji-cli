// @flow
import Conf from 'conf'

import {
  CONFIGURATION_PROMPT_NAMES,
  EMOJI_COMMIT_FORMATS
} from '../commands/config/prompts'

export const config = new Conf({ projectName: 'gitmoji' })

const setAutoAdd = (autoAdd: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.AUTO_ADD, autoAdd)
}

const setEmojiFormat = (emojiFormat: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT, emojiFormat)
}

const setSignedCommit = (signedCommit: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT, signedCommit)
}

const setScopePrompt = (scopePrompt: boolean) => {
  config.set(CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT, scopePrompt)
}

const setGitmojisUrl = (gitmojisUrl: string) => {
  config.set(CONFIGURATION_PROMPT_NAMES.GITMOJIS_URL, gitmojisUrl)
}

const getAutoAdd = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.AUTO_ADD) || false
}

const getEmojiFormat = (): string => {
  return (
    config.get(CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT) ||
    EMOJI_COMMIT_FORMATS.CODE
  )
}

const getSignedCommit = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT) || false
}

const getScopePrompt = (): boolean => {
  return config.get(CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT) || false
}

export const GITMOJIS_URL = 'https://gitmoji.dev/api/gitmojis'

const getGitmojisUrl = (): string => {
  return config.get(CONFIGURATION_PROMPT_NAMES.GITMOJIS_URL) || GITMOJIS_URL
}

export default {
  getAutoAdd,
  getEmojiFormat,
  getScopePrompt,
  getSignedCommit,
  getGitmojisUrl,
  setAutoAdd,
  setEmojiFormat,
  setScopePrompt,
  setSignedCommit,
  setGitmojisUrl
}
