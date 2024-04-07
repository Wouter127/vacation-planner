import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface DataCardProps {
    value: number;
    label: string;
    priceFormat?: boolean;
}

export const DataCard = ({value, label, priceFormat}: DataCardProps) => {
    return (
        <Card>
            <CardHeader className="flex-flex-rox items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{label}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {priceFormat ? formatPrice(value) : value}
                </div>
            </CardContent>
        </Card>
    )
}