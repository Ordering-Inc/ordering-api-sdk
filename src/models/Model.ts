import { TypeApi } from '../types'

export class Model {
  private original: any
  private api: TypeApi
  private hidden: string[] = ['original', 'api', 'hidden']
  constructor (original: any, api: TypeApi, hidden: string[] = []) {
    this.original = {
      ...original
    }
    this.api = api
    this.hidden = this.hidden.concat(hidden)
  }

  setApi (api: TypeApi) {
    this.api = api
  }

  async save () {
    if (!this.api) {
      throw new Error('You must provide the `api` to use `save` function. Example: const newModel = new Model(model, api) or newModel.setApi(api)')
    }
    const changes: any = {}
    Object.entries(this).forEach(([attribute, value]) => {
      if (!this.hidden.includes(attribute) && value !== this.original[attribute]) {
        changes[attribute] = value
      }
    })
    if (Object.values(changes).length > 0) {
      const { content } = await this.api.save(changes)
      if (!content.error) {
        const newModel: any = {}
        Object.entries(content.result).forEach(([attribute, value]) => {
          if (!this.hidden.includes(attribute)) {
            newModel[attribute] = value
          }
        })
        Object.assign(this, newModel)
        this.original = {
          ...this
        }
      }
      return content
    }
    return {
      error: false,
      result: this
    }
  }
}
