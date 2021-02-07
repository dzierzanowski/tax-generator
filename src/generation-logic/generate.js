import { chooseLanguage, shuffleArray } from '../utils'
import dataPath from './data.tsv'

let data = null

let xhr = new XMLHttpRequest()
xhr.open("GET", dataPath, true)
xhr.onload = () => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            data = xhr.responseText.replace(/[\r]+/g, '').split('\n').filter(e => e)
            for (let i = 0; i < data.length; i++) {
                data[i] = data[i].split('\t').filter(e => e)
            }
        } else {
            console.error(xhr.statusText)
        }
    }
};
xhr.send(null);

function generateTaxType(data) {
    const len = data[0].length  // Same for data[1] and data[2]
    const taxTypeIdx = Math.floor(Math.random() * len)
    return [
        data[0][taxTypeIdx],
        data[1][taxTypeIdx],
        data[2][taxTypeIdx]
    ]
}

function generateAlcohol(data) {
    const abSwitch = Math.round(Math.random())  // 0 or 1
    const action = shuffleArray(data[3].concat(data[4]))[0]
    const product = shuffleArray(data[5 + abSwitch])[0]
    const trait = shuffleArray(data[7].concat(data[8 + abSwitch]))[0]
    const tax = shuffleArray(data[10])[0]
    return {
        action: action,
        item: `${product} ${trait}`,
        taxAmount: tax
    }
}

function generateDistribution(data) {
    let pool = 100
    const amount1 = Math.floor(Math.random() * (pool - 10))
    pool -= amount1
    const amount2 = Math.floor(Math.random() * pool)
    pool -= amount2
    const amount3 = pool
    const amounts = [amount1, amount2, amount3].sort((a, b) => b - a)
    const benefactors = shuffleArray(data[31].concat(data[32])).slice(0, 3)
    return [amounts, benefactors]
}

export default function generate() {
    let dict = {}
    dict['taxType'] = generateTaxType(data)
    // Randomly choose method to generate data
    const itemData = shuffleArray([generateAlcohol])[0](data)
    const [amounts, benefactors] = generateDistribution(data)
    dict['title'] = `o ${dict['taxType'][1]} za ${itemData['action']} ${itemData['item']}`
    dict['art1'] = `Na ${itemData['action']} ${itemData['item']} nakłada się ${dict['taxType'][0]} w wysokości ${itemData['taxAmount']}`
    dict['art3'] = `Część wpływów z tytułu ${dict['taxType'][2]} w wysokości ${amounts[0]}% zostanie przeznaczona na ${benefactors[0]}, w ${amounts[1]}% na ${benefactors[1]} i w ${amounts[2]}% na ${benefactors[2]}`
    return dict
}