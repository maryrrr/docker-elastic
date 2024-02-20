const { Client } = require('@elastic/elasticsearch');
// const config = require('config');
// const elasticConfig = config.get('elastic');

const client = new Client({
    node: 'http://elastic2:9200',
});

async function searchElastic(searchTerm, startDate = null, endDate = null) {
    const query = {
        index: 'documents_idx',
        q: searchTerm,
    };

    if (startDate || endDate) {
        const dateRange = {};
        if (startDate) {
            dateRange.gte = startDate;
        }
        if (endDate) {
            dateRange.lte = endDate;
        }
        query.body = {
            query: {
                range: {
                    entryDate: dateRange
                }
            }
        }
    }
}


module.exports = {
    searchElastic
}
