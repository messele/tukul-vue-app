import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeroView from '../HeroView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HeroView, {})

    expect(wrapper).toBeTruthy()
  })
})
