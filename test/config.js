// @see /.travis.yml

var connectionParams = {

    mysql: {
        host:     '127.0.0.1',
        user:     'root',
        password: '',
        database: 'node_dbi_test'
    },

    pgsql: {
        host:     '127.0.0.1',
        user:     'postgres',
        password: '',
        database: 'node_dbi_test'
    },

    sqlite: {
        database: ':memory:'
    }

};

module.exports.getDbConfig = function( adapterName )
{
    switch ( adapterName )
    {

        case 'mysql-libmysqlclient':
        case 'mysql':
            return connectionParams.mysql;

        case 'sqlite3':
            return connectionParams.sqlite;

        case 'pg':
            return connectionParams.pgsql;

        default:
            throw new Error('Unknown Adapter "'+adapterName+'" !');

    }
};


module.exports.testedAdapterNames = [
    'mysql-libmysqlclient',
    'mysql',
    'sqlite3',
    'pg'
];
