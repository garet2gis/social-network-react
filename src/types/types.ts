export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type PhotoType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType
}

export type UserType = {
    id : number
    name: string
    status: string
    photos : PhotoType
    followed:boolean
}
type ColorPaletteType = {
    body: string
    header:string
    nav:string
    other:string
}

export type ThemeType = {
    colorPalettes : {
        first : ColorPaletteType
        second : ColorPaletteType
    }
    media: {
        phone: string
        tablet:string
    }
    borderRadius:string
}
