import styles from './styles.module.scss';
import Contratos from '@/components/buttonContratos';


export default function Dashboard(){
    return(

        <main className={styles.container}>

            <section className={styles.title}>
                <h1>Contrato:{}</h1>
                <Contratos></Contratos>
            </section>

            <section className={styles.cardBox}>
                teste
            </section>

            <section className={styles.listViwe}>
                
            </section>

        </main>
        
    )
}