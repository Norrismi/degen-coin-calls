export default {

    title: 'Calls',
    name: 'calls',
    type: 'document',
    fields: [
        { name: 'coin', type: 'string', title: 'Coin Name' },
        { name: 'CoinGain', type: 'text', title: 'Coin Gains' },
        { name: 'contract', type: 'text', title: 'contract' },
        { name: 'chart', type: 'url', title: 'Chart URL' },
        { name: 'website', type: 'url', title: 'website URL' },
        { name: 'telegram', type: 'text', title: 'telegram URL' },
        { name: 'Notes', type: 'text', title: 'Coin Notes' },
    ]
}