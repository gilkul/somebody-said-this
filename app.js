document.addEventListener('DOMContentLoaded', function () {
    const rootElement = document.getElementById('root');

    function App() {
        const [quote, setQuote] = React.useState('');

        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.quotable.io/random');
                const data = await response.json();
                setQuote(`${data.content} - ${data.author}`);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        React.useEffect(() => {
            fetchQuote();
        }, []);

        return (
            React.createElement('div', { className: 'container' },
                React.createElement('h1', null, 'somebody said this'),
                React.createElement('button', { onClick: fetchQuote }, 'Get Quote'),
                React.createElement('div', { id: 'quoteContainer', className: 'quoteContainer' },
                    quote && React.createElement('p', null, `"${quote}"`)
                )
            )
        );
    }

    ReactDOM.render(React.createElement(App), rootElement);
});
