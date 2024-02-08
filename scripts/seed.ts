const {PrismaClient} = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Music"},
                {name: "Fitness"},
                {name: "Photo"},
                {name: "Accounting"},
                {name: "Filming"},
                {name: "Engineering"},
            ]
        })
        console.log("success");
        
    } catch (error) {
        console.log("Error seeding the database categories", error)
    } finally {
        await db.$disconnect();
    }
}

main();