
import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../../public/assets/img/logo.png'
import { HiUserCircle } from    'react-icons/hi'

export default function Header(){
    return(
        <header className={styles.header}>
            <section className={styles.contentLogo}>
                <Image
                    src={Logo}
                    width={30}
                    height={30}
                    alt='Logo do header'
                />
            </section>
            <section className={styles.contentPerfil}> 
                <HiUserCircle size={30} color='#1f1f1f'/>
                <button className={styles.btnLogin}>Login</button>
                
            </section>
        </header>
    )
} 