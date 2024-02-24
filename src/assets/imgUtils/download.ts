import { domtoimage } from './dom-to-image'

const download = () => {
    const node = document.getElementsByClassName('talk-list')[0]
    const indicators = document.getElementsByClassName('insert-indicator')
    const indicator = indicators.length>0 ? indicators[0] : document.createElement("div")
    // 隐藏截图的滚动条
    node.setAttribute('style', 'overflow-y:hidden')
    indicator.setAttribute('style', 'display:none')

    const width = node.clientWidth
    const height = node.scrollHeight
    if (width && height) {
        domtoimage
            .toPng(node, { width, height })
            .then(function (dataUrl: string) {
                try {
                    (window as any).webkit.messageHandlers.downloadImage.postMessage(dataUrl);
                } catch (error) {
                    console.log(error);
                }
                const link = document.createElement('a')
                link.download = `Momotalk-${Date.now()}.png`
                link.href = dataUrl
                link.click()
                alert('保存图片成功!')
            })
            .catch(function (error: Error) {
                console.error('oops, screenshot went wrong!', error)
            })
            .finally(function () {
                node.setAttribute('style', 'overflow-y:scroll') // 恢复滚动功能
            })
    }
}

export { download }
