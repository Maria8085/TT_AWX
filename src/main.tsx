import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {AuthContextProvider} from "./helpers/authProvider/authContext.tsx";
import {PhoneContainer} from "./components/common/PhoneContainer.tsx";
import {ScreenContextProvider} from "./helpers/screenProvider/ScreenContext.tsx";
import {ScreenController} from "./components/common/ScreenController.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthContextProvider>
            <ScreenContextProvider>
                <PhoneContainer>
                    <ScreenController />
                </PhoneContainer>
            </ScreenContextProvider>
        </AuthContextProvider>
    </StrictMode>,
)
