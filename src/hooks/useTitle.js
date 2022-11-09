import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-snap kitchen`
    }, [title])
}

export default useTitle