export const getPageCount = (totalCount, limit) => {
    return (
        Math.ceil(totalCount / limit)
    )
}
export const getpagesArray = (totalPages) => {
    let res = []
    for (let i = 0; i < totalPages; i++) {
        res.push(i + 1)
    }
    return res
}