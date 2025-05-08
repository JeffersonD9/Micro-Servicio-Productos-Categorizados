
export class CRUDModel {
    constructor(model) {
        this.model = model;
    }

    async getAll(where = {}) {
        return this.model.findMany({ where })
    }

    async first(where) {
        return this.model.findUnique({ where })
    }

    async any(where) {
        const total = await this.model.count({ where })
        return total > 0;
    }

    async create(data) {
        return prisma.category.create({
          data: data.data || data // Handle both {data: {...}} and direct object formats
        });
      }

   async update(where, data) {
    return this.model.update({
        where,
        data 
    });
}
    async delete(where) {
        return this.model.delete({ where })
    }

}

