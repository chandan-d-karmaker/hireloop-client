import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Jobs = () => {
    return (
        <div>
            <Link href='/dashboard/recruiter/jobs/new'>
                <Button variant='primary'>Create New Job</Button>
            </Link>

        </div>
    );
};

export default Jobs;