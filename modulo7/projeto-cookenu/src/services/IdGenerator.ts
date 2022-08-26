import { v4 } from "uuid"

class IdGenerator {
    public generateId = () => {
        return v4()
    }
}

export default new IdGenerator()