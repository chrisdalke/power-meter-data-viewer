import { Box,VStack, HStack, Button, Heading, Text, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import databaseService from "../../services/database/databaseService";
import { AddIcon } from '@chakra-ui/icons';

const BatteryList = ({ list, onDelete }) => {
    if (list === null) {
        return (
            <Text>Loading</Text>
        )
    }
    if (list.length === 0) {
        return (
            <Text>No batteries</Text>
        )
    }
    const rows = list.map(({ id, doc }) => {
        const {
            name
        } = doc;
        return (
            <WrapItem key={id} justify="center">
                <Box
                    borderRadius={5}
                    borderWidth="1px"
                    borderColor="blackAlpha.300"
                    minW="200px"
                    p={2}
                    bg={'blackAlpha.200'}
                    onClick={() => onDelete(doc)}
                >
                    <Text>{name}</Text>  
                </Box>
            </WrapItem>
        );
    });
    return (
        <Wrap>
            {rows}
        </Wrap>
    );
}
const ListScreen = () => {
    const [batteries, setBatteries] = useState(null);

    const reloadBatteries = async () => {
        const batArray = await databaseService.getBatteries();
        setBatteries(batArray);
    };

    useEffect(() => {
        reloadBatteries();
    }, []);

    const createNewBattery = async () => {
        await db.createBattery({"name": `Battery ${batteries.length + 1}`});
        await reloadBatteries();
    }
    const clearBatteries = async () => {
        await db.deleteAllBatteries();
        await reloadBatteries();
    }

    return (
        <VStack alignItems="stretch">
            <HStack justifyContent="stretch">
                <Heading flex="1" size="lg">All Batteries</Heading>
                <IconButton 
                    onClick={createNewBattery}
                    colorScheme="blackAlpha"
                ><AddIcon /></IconButton>
            </HStack>
            <BatteryList list={batteries} onDelete={async (doc) => {
                await db.deleteBattery(doc);
                await reloadBatteries();
            }}/>
        </VStack>
    );
};

export default ListScreen;