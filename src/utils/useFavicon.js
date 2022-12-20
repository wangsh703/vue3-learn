import {} from 'vue'
export default function useFavicon (newIcon){
    const favicon = ref(newIcon)
    const reset = newIcon.value = '/favicon.ico'
    const updateFavicon = (icon) => {
        document.head.querySelectorAll(`link[rel*="icon"]`).forEach(v => v.href = `${icon}`)
    }


    watch(favicon,(i)=>updateFavicon(i))
    return {favicon,reset}
}