

const styles = {
    container: {
        minHeight: "calc(100vh - 50px)",
        margin: "40 auto "
    },
    title: {
        fontWeight: 500,
        fontSize: 60,
        textAlign: "center",
    },
};

export default function HomePage() {
    return (
            <div style={styles.container}>
                <h1 style={styles.title}>Phonebook welcome page{" "}
                    <span role="img" aria-label="Black Touchtone Telephone">🕿</span>
                </h1>
            </div>
    );
}
