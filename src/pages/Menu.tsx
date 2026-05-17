import { useEffect } from 'react';
import { usePizzeriaStore } from '../store/Pizza';
import styles from './Menu.module.css';

const Menu = () => {
    const { menu, loadMenu, addToCart } = usePizzeriaStore();

    useEffect(() => {
        loadMenu();
    }, [loadMenu]);

    return (
        <div>
            <h1 className="page-title">🍕 То, чего нет в Додо</h1>
            <div className={styles.grid}>
                {menu.map((pizza) => (
                    <div key={pizza.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {pizza.imageUrl && pizza.imageUrl !== 'default.png' ? (
                                <img
                                    src={pizza.imageUrl}
                                    alt={pizza.name}
                                    className={styles.image}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling?.classList.add(styles.show);
                                    }}
                                />
                            ) : null}
                            <div className={styles.noImage} style={{ display: pizza.imageUrl && pizza.imageUrl !== '/default.png' ? 'none' : 'flex' }}>
                                🍕
                                <span>нет фото</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{pizza.name}</h3>
                            <p className={styles.ingredients}>{pizza.ingredients.join(', ')}</p>
                            <div className={styles.priceSection}>
                                <span className={styles.price}>{pizza.price} ₽</span>
                                <button
                                    onClick={() => addToCart(pizza)}
                                    className={styles.addButton}
                                >
                                    🛒 В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;