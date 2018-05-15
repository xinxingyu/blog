const getDirectoryTree = (dir) => {
    let result = {
        path: dir,
        name: path.basename(dir),
        type: 'directory'
    }
    let files = fs.readdirSync(dir) //同步拿到文件目录下的所有文件名

    result.children = files.map(file => {
        let subPath = path.join(dir, file) //拼接为相对路径
        let stats = fs.statSync(subPath) //拿到文件信息对象

        if (stats.isDirectory()) {
            return getDirectoryTree(subPath)
        }
        return { //构造文件数据
            path: subPath,
            name: file,
            type: 'file'
        }

    })

    return result
}

exports getDirectoryTree
