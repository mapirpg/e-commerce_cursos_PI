module.exports = (connection, DataTypes) =>{

       const model = connection.define('Cadastro',{
                
                id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true

                },
                usuario: {
                        type: DataTypes.STRING(50)
                },
                email: {
                        type: DataTypes.STRING(50)
                },
                senha: {
                        type: DataTypes.STRING(8)
                }
        },{

        timestamps: true,
        tableName: 'usuarios'
        })
        model.sync({ alter: true})
        return model
}