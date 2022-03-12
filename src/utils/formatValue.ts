const formatValue = (value: number): string =>
    Intl.NumberFormat('us-US', {style: 'currency', currency: 'USD'}).format(
        value,
    )

export default formatValue;
