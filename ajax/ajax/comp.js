function ajaxUpload(config){
        const xhr = new XMLHttpRequest()

        if (xhr.upload){
            xhr.upload.onprogress = e =>{
                const atual = e.loaded
                const total = e.total
                const percentual = Math.floor(atual / total * 100)
                config.progresso({atual, total, percentual})
            }
        }

        xhr.open("post", config.url, true)
        xhr.send(config.formData)
    }


    document.querySelector('input').onchage = e =>{

        console.log('Enviando')
        const formData = FormData()
        const inputFile = e.target
        // form.append(e.target.name, e.target.files[0])
        form.append(inputFile.name, inputFile.files[0])

        ajaxUpload({
            url: "upload",
            formData: formData,
            progresso(dados){
                const progresso = document.querySelector('.progresso')
                progresso.innerHTML = JSON.stringify(dados)
            }
        })
    }