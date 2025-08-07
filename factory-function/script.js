
const factoryFunction = (name) => {
    return {
        logou: () => alert(`O usuário ${name} logou`),
        deslogou: () => alert(`O usuário ${name} deslogou`),
    }
}

factoryFunction('Kennedy').logou();