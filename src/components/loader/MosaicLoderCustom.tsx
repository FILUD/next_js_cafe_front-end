import { Mosaic } from "react-loading-indicators"


interface MosaicLoderCustomProop {
    loading: boolean
}

export const MosaicLoderCustom: React.FC<MosaicLoderCustomProop> = ({ loading = false }) => {

    return (
        <main
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: `${loading ? 'flex' : 'hiden'}`,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999999999
            }}
        >
            <Mosaic color="#312776" size="small" text="Loading" textColor="" />
        </main>
    )
} 